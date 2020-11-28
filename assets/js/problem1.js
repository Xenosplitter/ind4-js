/**
 * Problem #1 - Filter Table
 * Code based from w3schools
 * https://www.w3schools.com/howto/howto_js_filter_table.asp
 */
function filterSearch() {
    // Declare variables
    var inputName = document.getElementById("myInputName");     // Get input of Name seraches
    var inputGen = document.getElementById("myInputGenerator")  // Get input of Generator searches
    var filterName = inputName.value.toUpperCase();             // Non-case-specific searching of names
    var filterGen = inputGen.value.toUpperCase();               // Non-case-specific searching of generators
    var table = document.getElementById("myTable");             // Get table
    var tr = table.getElementsByTagName("tr");                  // Get all table rows
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        console.log(i)
        // Get column values
        td = tr[i].getElementsByTagName("td")[0];
        tdg = tr[i].getElementsByTagName("td")[1];
        if (td || tdg) {                                            // Check if not empty
            txtName = td.textContent || td.innerText;               // Get text from input
            txtGen = tdg.textContent || tdg.innerText;              // Get text from input
            if (txtName.toUpperCase().indexOf(filterName) > -1) {   // Find matching names
                if(txtGen.toUpperCase().indexOf(filterGen) > -1) {  // Find matching gens
                    tr[i].style.display = "";                       // Show row
                }
                else {                                              // If no generator matches
                    tr[i].style.display = "none";                   // Hide row
                }
            } else {                                                // If no name matches
            tr[i].style.display = "none";                           // Hide row
            }
        }
    }
}