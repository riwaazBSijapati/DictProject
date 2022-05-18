$(document).ready(function () {
    const lookupButton = $("#lookup");
    const searchBox = $("#searchBox");
    const listBox = $("#search-list");
    listBox.append(`<p> Type in a word above and press the "mean?" button to find its meaning.</p>`);

    lookupButton.click(function () {
        const searchedValue = searchBox.val();
        $.ajax({
            url: `/search-word?searchWord=${searchedValue}`,
            type: "GET",
            dataType: 'json',
            success: function (result) {
                const list = result.data;
                listBox.empty();
                if (list.length > 0) {
                    listBox.append(`<p style="text-align:center">"${searchedValue}" means:`)
                    for (let i = 0; i < list.length; i++) {
                        const listVal = list[i];
                        listBox.append(`<p>
                    ${i + 1}, ${listVal.wordtype}
                    :
                    ${listVal.definition}</p>`);
                    }
                }
                else{
                    listBox.append(`<p> Word not found. Try again! </p>`);
                }
            },
        })
    })
})