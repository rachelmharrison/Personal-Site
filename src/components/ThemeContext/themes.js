const themes = [
    {
      name: 'blue',
      firstTime: true,
      colorPrimary: '#4ea9da',
      colorAlternate: '#FAFAFA',
      colorHighlight: '#daedf7',
      textPrimary: '#202121',
      navAlpha: 'rgba(250, 250, 250, 0.75)'
    }
  ];
  
  export const getThemes = () => {
    return themes.map((theme) => {
      return {
        name: theme.name,
        firstTime: theme.firstTime,
        colorPrimary: theme.colorPrimary,
        colorAlternate: theme.colorAlternate,
        colorHighlight: theme.colorHighlight,
        bgPrimary: theme.colorAlternate,
        bgAlternate: theme.colorPrimary,
        bgLanding: theme.colorPrimary,
        textPrimary: theme.textPrimary,
        textAlternate: theme.colorAlternate,
        textLanding: theme.colorPrimary,
        parallaxStars: theme.colorPrimary,
        navAlpha: theme.navAlpha
      };
    });
  };