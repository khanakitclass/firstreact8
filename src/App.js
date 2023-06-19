import './App.css';
import Clock from './containers/Clock';
import ClockFun from './containers/ClockFun';
import Counter from './containers/Counter';
import Country from './containers/Country';
import CountryFun from './containers/CountryFun';
import Employee from './containers/Employee';
import EmployeeFun from './containers/EmployeeFun';
import Products from './containers/Products';
import Students from './containers/Students';
import StudentsFun from './containers/StudentsFun';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
      <Products />
      {/* <ClockFun /> */}
      {/* <Clock /> */}
      {/* <CountryFun /> */}
      {/* <Country /> */}
      {/* <Counter /> */}
      {/* <Employee /> */}
      {/* <EmployeeFun /> */}
    </div>
  );
}

export default App;
