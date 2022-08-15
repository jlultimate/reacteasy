// // a good way of looping in react

var data = [
    {id:1, name:"hi"},
    {id:2, name:"hello"},
    {id:3, name:"holá"},
    {id:4, name:"hallo"},
    {id:5, name:"你好"},
    {id:6, name:"こんにちは"},
    {id:7, name:"привет"}
];

// export function AnimalList(){
//     return (
//         <ul>
//         {data &&
//             data.map(function(id, name){
//                 return <li>{id}.{name}</li>
//             })
//         }
//         </ul>
//     )
// }
// const data = [
//   { id: 1, name: 'Fido 🐕' },
//   { id: 2, name: 'Snowball 🐈' },
//   { id: 3, name: 'Murph 🐈‍⬛' },
//   { id: 4, name: 'Zelda 🐈' },
// ];

export function AnimalList() {
  return (
    <>
      <ul>
        {data &&
          data.map(({ id, name }) => {
            return <li key={id}>{id}: {name}</li>;
          })}
      </ul>
    </>
  );
}