

// let  obyekt =[
//   telebeler =[
// {
//     telebe_id: 1,
//     ad: "Robert",
//     soyad: "Fisher",
//     maraq: "Play chess",
//     bal: 100,
//     qrup: "Axsam",

// },
// {
//     telebe_id: 2,
//     ad: "George",
//     soyad: "Orwel",
//     maraq: "Reading book",
//     bal: 92,
//     qrup: "Gunorta",

// },
// {
//     telebe_id: 3,
//     ad: "Cristopher",
//     soyad: "Nolan",
//     maraq: "Shoot film",
//     bal: 77,
//     qrup: "Seher",

// },
// {
//     telebe_id: 4,
//     ad: "Frida",
//     soyad: "Kahlo",
//     maraq: "Draw portrait",
//     bal: 65,
//     qrup: "Seher",

// },
// {
//     telebe_id: 5,
//     ad: "Haruki",
//     soyad: "Murakami",
//     maraq: "Shoot animation",
//     bal: 87,
//     qrup: "Axsam",

// },
// {
//     telebe_id: 6,
//     ad: "Van",
//     soyad: "Gogh",
//     maraq: "Surrealist pictures",
//     bal: 98,
//     qrup: "Gunorta",

// },
// {
//     telebe_id: 7,
//     ad: "Leonardo",
//     soyad: "Di Caprio",
//     maraq: "Acting film",
//     bal: 59,
//     qrup: "Gunorta",

// },
//   ],
//   qruplar=[
//     {qrup_id: 1,
//         qrup_ad: "Seher"
//     },
//     {qrup_id: 2,
//         qrup_ad: "Gunorta"
//     },
//     {qrup_id: 1,
//         qrup_ad: "Axsam"
//     }
//   ]
//     ]
// let ortaq = 0
// let total = 0

// const ortalama = obyekt[0].map ((reverse) => ortaq += reverse.bal )
// total = (ortaq / obyekt[0].length).toFixed(2)
// console.log(`Telebelerin qiymet ortalamasi: ${total} -dir`)


// obyekt[0].map((son) => {
//   let xeberdarliq = obyekt[0].filter((t) => obyekt[0].bal < 0)
//   ;
//   if(son.bal < 90){
//     console.log(`${son.ad} ${son.soyad} >> ${son.bal} XRISTIAN, YAXSI OXU!!! :)`)
//   }
// });




// task1


// function adlar(ad) {
//     let netice = obyekt[0].find((telebe) => {
//         return telebe.ad.toLowerCase() === ad.toLowerCase();
//     });

//     return netice ? netice : "Bele bir telebe tapilmadi.";
// }

// let axtar = prompt("Telebenin adini daxil edin:");
// let tapilan = adlar(axtar);
// console.log(tapilan);


// // task 2

// let birthday = new Date("03-28-2024");
// setInterval(() => {
//   let now = new Date();
//   let between = now - birthday;
//   let il = Math.trunc(between / (1000 * 60 * 60 * 24 * 365));
//   let gun = Math.trunc(between / (1000 * 60 * 60 * 24));
//   let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
//   let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
//   let saniye = Math.trunc(between / 1000) % 60;
//   let randomReng = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
// //   console.clear();
// console.log(
//     `%c${gun} gün ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`,
//     `color: ${randomReng}`
//   );
// }, 1000);


// task 3

// let soz = prompt("Bir söz daxil edin:");

// for (let i = 1; i <= soz.length * 2 - 1; i++) {
//     console.log(soz.slice(0, i <= soz.length ? i : soz.length * 2 - i));
// }