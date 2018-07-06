const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
    button: {
        margin: theme.spacing.unit,
      },
  });

  export default styles;