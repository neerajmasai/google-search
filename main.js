function search(){
    /* search for query parameter from serpstack api*/

    //get query from search bar
    const query = document.getElementById("query").value;

    //search query through fetch
    fetch("http://api.serpstack.com/search"
    +"?access_key=7df0ccb574512499d3b18b5e1ed1cd55"
    +`&query=${query}`).then((res)=>{
        return res.json();
    }).then((res)=>{
        console.log(res);
        res.organic_results.forEach(element => {
            const parent = document.getElementById("searchResults");

            const div = document.createElement("div");
            div.style.width = "100%"
            div.style.marginBottom = "20px";

            const breadcrumb = document.createElement("p");
            breadcrumb.innerHTML = element.displayed_url;
            breadcrumb.style.fontSize = "12px";

            const title = document.createElement("a");
            title.innerHTML = element.title;
            title.href = element.url;
            title.style.color = "#320dba";
            
            div.append(breadcrumb, title);

            parent.append(div);
         });
    });


}