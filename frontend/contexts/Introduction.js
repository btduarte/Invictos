import { createContext, useState } from "react";

export const IntroductionPageContext = createContext();

export function IntroductionPageProvider(props) {
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <IntroductionPageContext.Provider values={{pageIndex, setPageIndex}}>
      {props.children}
    </IntroductionPageContext.Provider>
  )

}