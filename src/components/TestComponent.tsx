import { type } from "os";

let a: number = 10;
a = 100;

let bool: boolean | null = true;
bool = null;

let arr: Array<string> = ['name', 'str', 'Vadya'];
// let arr2: string[] = ['name', 'str', 'Vadya'];
// alert(arr[1].toUpperCase());

arr.map(e => e.toUpperCase());

let sex: 'male' | 'female';
sex = 'male';

type AddressType = {
   city: string | null,
   country: string | null
}

type userType = {
   sayHello?: (message: string) => void,
   name: string,
   age: number,
   isSamurai: boolean,
   address: AddressType | null
}



const user: userType = {
   sayHello(message: string) { alert('Hello') },
   name: 'Vadim',
   age: 35,
   isSamurai: true,
   address: {
      city: 'Mogilev',
      country: 'Belarus'
   },
};


const sum = (a: number, b: any | Object) => {
   return a + b;
}

sum(1, '20');

const sum2: (a: number, b: number) => number = (a: number, b: any | Object) => {
   return a + b;
};


// type initialStateType = {
//    sayHello: (message: string) => void,
//    name: string,
//    age: number,
//    isSamurai: boolean;
//    address: AddressType | null,
//    counter: number
// }

const initialState = {
   sayHello(message: string) { alert('Hello') },
   name: 'Vadim',
   age: 35,
   isSamurai: true,
   address: {
      city: 'Mogilev',
      country: 'Belarus'
   },
   counter: 10
};

const initialState2 = {
   name: null as string | null,
   age: null as number | null,
   isSamurai: null as boolean | null,
   address: {
      city: null,
      country: null
   } as AddressType,
   counter: 0,

   addresses: [] as Array<AddressType>
};

type initialStateType = typeof initialState2;

const state: initialStateType = {
   name: null,
   age:35,
   address: {
      city: 'dfd',
      country: 'dfd'
   },
   addresses: [{ city: 'dfd', country: 'saa' }], 
   counter: 5,
   // isSamurai: true
   isSamurai: true
}

let GET_TASKS = 'GET_TASKS';

type GetTaskAT = {
   id: number,
   type: typeof GET_TASKS
}

let action: GetTaskAT = {
   type: GET_TASKS,
   id:12
}



const TestComponent = () => {
   return (
      <div>
         hello
      </div>
   )
}
export default TestComponent;