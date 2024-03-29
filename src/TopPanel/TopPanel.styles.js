export default {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 0,
    marginLeft: 'auto',
    width: 'calc(100% - 500px)',
    '& span': {
      fontSize: 14,
      fontWeight: 700,
    },  
  },
  tools: {
    display: 'inline-block',
  },
  dateItem: {
    display: 'inline-block',
    fontSize: 16,
    fontWeight: 400,
    color: '#ADB2BA',
    '&:hover': {
      cursor: 'pointer',
      borderBottom: 'solid 1px white',
    },
  },
  selectWrapper: {
    position: 'relative',
    width: 200,
    marginRight: 2,
    border: '1px solid #d2d6de',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: -5,
      top: -2,
      height: 34,
      width: 1,
      background: '#ffffff',
    },
  },
  textInput: {
    width: '110px',
  },
  searchInput: {
    width: 248,
    margin: '0 20px',
    paddingLeft: 46,
    height: 35, 
    fontSize: 14,
    color: '#ADB2BA',
    borderRadius: 4,
    border: '0.1px solid #dedcdc'
  },
  searchContainer: {
    position: 'relative',
    height: 36,
    paddingRight: 22,
    borderLeft: 'solid 1px white',
    borderRight: 'solid 1px white',
  },
  button: {
    position: 'relative',
    width: '129 !important',
    height: 35,
    padding: '0px 5px 0 7px',
    fontSize: 22,
    color: '#fff',
    backgroundColor: '#27AE60 !important',
  },
  upgrade: {
    width: 131,
    height: 35,
    background: '#27AE60',
    borderRadius: 3,
    border: 'none',
    color: '#ffffff',
    paddingLeft: 12,
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'left',
  },
  itemWrapper: {
    position: 'relative',
    flexShrink: 0,
    flexGrow: 0,
    width: 65,
    height: 60,
    lineHeight: '60px',
    textAlign: 'center',
    borderLeft: '1px solid #EAEAEA',
  },
  label: {
    position: 'absolute',
    top: 6,
    right: 8,
    width: 15,
    height: 15,
    color: '#fff',
    fontSize: 11,
    lineHeight: '16px',
    textAlign: 'center',
    borderRadius: '50%',
    background: '#28C552',
  },
  item: {
    display: 'inline-block',
    width: 36,
    height: 36,
    marginTop: 12,
    background: '#016BFC',
    borderRadius: 3,
    textAlign: 'center',
    verticalAlign: 'top',
    lineHeight: '35px',
    cursor: 'pointer',
  },
}