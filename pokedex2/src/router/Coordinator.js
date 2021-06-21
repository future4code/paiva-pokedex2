export const goTo = (history,url) => {
    history.push(url);
  };

export const toBack = (history) => {
    history.goBack()
  };