import { useEffect, useState } from "react"

const useWindowSize = () => {
   // Declare a new state variable with the "useState" Hook
   const [width, setWidth] = useState<number | null>(window.innerWidth)

   useEffect(() => {
      /* Set a variable "mounted" as an indicator
         when a component is just mounted */
      let mounted: boolean = true

      /* Inside of a "useEffect" hook add an event listener that updates
         the "width" state variable when the window size changes */
      if (mounted) window.addEventListener("resize", () => setWidth(window.innerWidth))

      /* Set the value of "mounted" as false
         and return it as a clean up for the function */
      return () => {
      mounted = false
      window.removeEventListener("resize", () => {})
      }

      /* passing an empty array as the dependencies of the effect will cause this
         effect to only run when the component mounts, and not each time it updates.
         We only want the listener to be added once */
}, [])

return width
}

export default useWindowSize