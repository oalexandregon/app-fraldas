import Tab from '@mui/material/Tab';

interface TabProps {
    children?: React.ReactNode;
    props: any;
  }

  const TabComponent: React.FC<TabProps> = ({children, props}) => {
    return(
        <Tab {...props}/> 
    )
  }

  export default TabComponent