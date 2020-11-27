/**
 * Problem #1 - Filter Table
 * Code based from w3schools
 * https://www.w3schools.com/howto/howto_js_filter_table.asp
 */
function filterSearch() {
    // Declare variables
    var input = document.getElementById("myInput"); // Get input
    var filter = input.value.toUpperCase();         // Non-case-specific searching
    var table = document.getElementById("myTable"); // Get table
    var tr = table.getElementsByTagName("tr");      // Get all table rows
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            } else {
            tr[i].style.display = "none";
            }
        }
    }
}