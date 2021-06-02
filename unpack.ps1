param (
    $projectname
)

if ((Get-ChildItem -Path "./src" -Recurse | Measure-Object).count -eq 0) {
    foreach ($obj in (get-childitem "./old/$projectname")) {mv "./old/$projectname/$obj" "./src/$obj"}
} else {
    echo "Target destination './src' must be empty!"
}