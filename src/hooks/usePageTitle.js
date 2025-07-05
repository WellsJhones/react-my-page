import { useEffect } from "react";

export const usePageTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} - Wells Jhones`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

export default usePageTitle;
