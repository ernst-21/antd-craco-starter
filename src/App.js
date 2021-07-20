import { Typography } from 'antd';
import './App.less';

const {Title} = Typography;

function App() {
  return (
    <div className="app">
      <div className="components-container">
        <Title level={1}>Hello World</Title>
      </div>
    </div>
  );
}

export default App;
