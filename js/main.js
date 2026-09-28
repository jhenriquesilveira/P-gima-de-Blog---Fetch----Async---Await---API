async function infPais(pais){
    const info = await fetch('https://api.restcountries.com/countries/v5?q=' + pais,
  { headers: { 'Authorization': 'Bearer rc_live_20b130d4efeb402f84a83c23f1928e55' } });

    const data = await info.json();
    console.log(data);
}

infPais('brazil')