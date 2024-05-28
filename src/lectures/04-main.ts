export function isPositive(n: number) {
  return n > 0;
}

const myInfomation1 = {
  id: 1,
  firstName: 'Viet',
  LastName: 'Nguyen',
  address: 'Da Nang',
};
const myInfomation2 = { ...myInfomation1, fullName: 'Nguyen Viet' };
console.log(myInfomation2);

const { firstName, ...rest } = myInfomation2;
console.log('firstName', firstName);
console.log('rest', rest);

const myInfomation3 = [
  {
    id: 1,
    firstName: 'Viet',
    LastName: 'Nguyen',
    address: 'Da Nang',
  },
  {
    id: 2,
    firstName: 'Nam',
    LastName: 'Cao',
    address: 'Da Nang',
  },
];
const newList = { ...myInfomation3 };
newList[0].firstName = 'Hau';
console.log(newList);
