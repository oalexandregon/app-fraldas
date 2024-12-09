import { AppBar } from "../components";
import { useAppContext } from "../Context";

const Dashboard: React.FC = function () {
  const { translate } = useAppContext();
  return (

    <div>
      <AppBar title={translate('dashboard')} />
      <h1>Dashboard</h1>
    </div>

  );
}

export default Dashboard;