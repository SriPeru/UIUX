# Loading Large amount of data from/to server

1. How to load large JSON?
    - Stream the data(JSON) as small chunks


2. How to search DB while search using autocomplete?

    1. Approach 1:

        - In JS use **Change and input** events to deduct the input change
        - To avoid more searches, let the user enter multiple charactor(5+) and call the API to search. In this case the searching data volume will be small.
        - Show some information to the user to keep them engaged.
        - Even if the data is more don't get more data to the client.
        - Get a small chunk and show arrow/next to get more data from server.

                jQuery Example

                $("#search-input").live('keydown', setTimeout(function() {
                    search = $(this).val();
                    autocomplete_div = $(".autocomplete")
                    $.get('/ajax/search/', {'search': search,}, function(response){
                        autocomplete_div.html(response)
                    })
                },250));

                Pure JS

                <input type="text" id="suggestion" onkeyup="DelayedCallMe(200);"/>
                var _timer = 0;
                function DelayedCallMe(num) {
                    if (_timer)
                        window.clearTimeout(_timer);
                    _timer = window.setTimeout(function() {
                        callMe(num);
                    }, 500);
                }



    2. Approach 2:

        - Store previous searches by other users [which are not private data]
        - Show it while typing as suggestions.
        - If the content not matches, 
            - let the user enter whole content and search.
            - Or by that time user might've entered sizable charactors, so search can be initiated(if required).

3. Loading large data in single page.

    1. Approach 1

        - Load only limited data and show it in the UI
        - When the page scroll starts load the next part and build the UI.
        - jQuery - jscroll can be used to lazyLoad the content while scroll.

    2. Approach 2

        - Use jQuery DataTable and to get the large data, use serverSide processing mode.
        - Client-side processing - where filtering, paging and sorting calculations are all performed in the web-browser.

        - Server-side processing - where filtering, paging and sorting calculations are all performed by a server. DataTables will send parameters to the server indicating what data it needs (what page, what filters are applied etc), and also expects certain parameters back in order that it has all the information required to display the table.

        - The same can be done using Pure JS, and pagination should be added to get the sorted data and show it in the UI. This way large processing can be avoided.

        [https://datatables.net/examples/data_sources/server_side.html](https://datatables.net/examples/data_sources/server_side.html) 