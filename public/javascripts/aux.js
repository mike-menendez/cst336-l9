const conn_url = "mysql://di6bfd3s5livr33s:zlcaatriixgmcr7m@kf3k4aywsrp0d2is.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/k9bje8xxig8ixlpy";

// How to do html in the alert (answers was passed along the chain, we can use a regular var on query results):
// title: 'All done!',
// html: `
//   Your answers:
//   <pre><code>${answers}</code></pre>
// `,
// confirmButtonText: 'Lovely!'

$(".btn").on('click', function() {
    Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        }
    }).queue([{
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
        options = options.value;
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