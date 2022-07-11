import notion from '.';
import { getTextContent, getDateValue } from 'notion-utils';
import { Block, CollectionPropertySchemaMap, NotionMap } from 'notion-types';
import { convertLocaleDateFormat } from 'libs/utils';

export const getAllPostIds = (collectionQuery: { [s: string]: unknown }) => {
  const views = Object.values(collectionQuery)[0];
  const pageSet = new Set<string>();

  Object.values(views).forEach((view) => {
    view?.collection_group_results?.blockIds?.forEach((id: string) =>
      pageSet.add(id)
    );
  });

  return Array.from(pageSet);
};

export const getPageProperties = async (
  id: string,
  block: NotionMap<Block>,
  schema: CollectionPropertySchemaMap
): Promise<PostPreview> => {
  const rawProperties = Object.entries(block?.[id]?.value?.properties || []);
  const excludeProperties = ['date', 'select', 'multi_select', 'person'];
  const properties: any = {};

  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val]: [any, any] = rawProperties[i];
    properties.id = id;

    if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[schema[key].name] = getTextContent(val);
    } else {
      switch (schema[key]?.type) {
        case 'date': {
          const dateProperty = getDateValue(val);
          delete dateProperty.type;
          properties[schema[key].name] = convertLocaleDateFormat(
            dateProperty?.start_date
          );

          break;
        }
        case 'select':
        case 'multi_select': {
          const selects = getTextContent(val);

          if (selects[0]?.length) {
            properties[schema[key].name] = selects.split(',');
          }

          break;
        }
        case 'person': {
          const rawUsers = val.flat();
          const users = [];

          for (let i = 0; i < rawUsers.length; i++) {
            if (rawUsers[i][0][1]) {
              const userId = rawUsers[i][0];
              const res: any = await notion.getUsers(userId);
              const resValue =
                res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value;
              const user = {
                id: resValue?.id,
                first_name: resValue?.given_name,
                last_name: resValue?.family_name,
                profile_photo: resValue?.profile_photo,
              };

              users.push(user);
            }
          }
          properties[schema[key].name] = users;

          break;
        }
        default:
          break;
      }
    }
  }

  return properties;
};
