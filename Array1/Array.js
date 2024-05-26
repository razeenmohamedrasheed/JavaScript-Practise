const footballers = [
    {
        name: "Lionel Messi",
        nationality: "Argentinian",
        club: "Paris Saint-Germain",
        position: "Forward",
        goals: 700,
        assists: 300,
        dob: "1987-06-24"
    },
    {
        name: "Cristiano Ronaldo",
        nationality: "Portuguese",
        club: "Al Nassr",
        position: "Forward",
        goals: 750,
        assists: 250,
        dob: "1985-02-05"
    },
    {
        name: "Neymar Jr.",
        nationality: "Brazilian",
        club: "Paris Saint-Germain",
        position: "Forward",
        goals: 350,
        assists: 200,
        dob: "1992-02-05"
    },
    {
        name: "Kevin De Bruyne",
        nationality: "Belgian",
        club: "Manchester City",
        position: "Midfielder",
        goals: 100,
        assists: 180,
        dob: "1991-06-28"
    },
    {
        name: "Virgil van Dijk",
        nationality: "Dutch",
        club: "Liverpool",
        position: "Defender",
        goals: 20,
        assists: 10,
        dob: "1991-07-08"
    },
    {
        name: "Kylian Mbappe",
        nationality: "French",
        club: "Paris Saint-Germain",
        position: "Forward",
        goals: 200,
        assists: 100,
        dob: "1998-12-20"
    },
    {
        name: "Robert Lewandowski",
        nationality: "Polish",
        club: "Barcelona",
        position: "Forward",
        goals: 500,
        assists: 120,
        dob: "1988-08-21"
    },
    {
        name: "Sergio Ramos",
        nationality: "Spanish",
        club: "Paris Saint-Germain",
        position: "Defender",
        goals: 100,
        assists: 40,
        dob: "1986-03-30"
    },
    {
        name: "Luka Modric",
        nationality: "Croatian",
        club: "Real Madrid",
        position: "Midfielder",
        goals: 50,
        assists: 80,
        dob: "1985-09-09"
    },
    {
        name: "Mohamed Salah",
        nationality: "Egyptian",
        club: "Liverpool",
        position: "Forward",
        goals: 250,
        assists: 100,
        dob: "1992-06-15"
    }
];

footballers.forEach((item,index)=>{
    if(item?.position.includes("Mid")){
        console.log(item)
    }
})

const filterData = footballers.filter(player=> player.assists<300)
console.table(filterData)

