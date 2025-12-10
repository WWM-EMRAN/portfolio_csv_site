function loadCSV(path, callback) {
    Papa.parse(path, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
            if (typeof callback === "function") {
                callback(results.data);
            }
        },
        error: function(err) {
            console.error("CSV Load Error for:", path, err);
        }
    });
}

// Generic data loader (CSV only now)
function loadData(file, cb) {
    if (file.toLowerCase().endsWith(".csv")) {
        loadCSV(file, cb);
    } else {
        console.error("Only .csv files are supported now. Passed:", file);
    }
}