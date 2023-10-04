import { Employee } from './employee';
import{Verifydto} from './employee';
import{EmployeePostDTO} from './employee';



describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee('','','',NaN,'','','','')).toBeTruthy();
  });
});

describe('VerifyDto', () => {
  it('should create an instance', () => {
    expect(new Verifydto('','')).toBeTruthy();
  });
});

describe('EmployeePostDTO', () => {
  it('should create an instance', () => {
    expect(new EmployeePostDTO('','','',NaN,'','')).toBeTruthy();
  });
});