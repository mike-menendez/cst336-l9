$(".btn").on('click', function() {
    Swal.queue([{
            title: "Enter Search Term",
            confirmButtonText: "Next &rarr;",
            input: 'text'
        },
        {
            title: "Search Method",
            input: 'select',
            confirmButtonText: "Search!",
            inputOptions: {
                author: "Author Name",
                keyword: "Keyword",
                category: "Category",
                gender: "Gender"
            }
        }
    ]).then(options => {
        var authFlag = false;
        if (options[1] == "author") {
            //Auth query
            authFlag = true;
        } else if (options[1] === "keyword") {
            //keyword query
        } else if (options[1] === "category") {
            ///category query
        } else {
            //gender query
        }
        if (authFlag) {
            Swal.queue([{
                    title: "Author",
                    text: "Value"
                },
                {
                    title: "Quote",
                    text: "Quote"
                }
            ]);
        } else {
            Swal.fire({
                title: "All other Query Results",
                text: "As they only require one modal"
            });
        }
    });
});