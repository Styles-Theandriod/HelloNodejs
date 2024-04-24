const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

// Serve static files (like your React app)
app.use(express.static(path.join('index.html')))

// Start Server 
app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
})