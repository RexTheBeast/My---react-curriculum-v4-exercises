import SnackHeader from './SnackHeader';
import SnackList from './SnackList';
import SnackFooter from './SnackFooter';

export default function SnackApp() {
  return (
    <div>
      <SnackHeader></SnackHeader>
      <SnackList></SnackList>
      <SnackFooter></SnackFooter>
    </div>
  );
}
