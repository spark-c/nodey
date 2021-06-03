param (
    $projectname
)

if (!(test-path "./old/$projectname")) {
    mkdir "./old/$projectname"
}

foreach ($obj in (get-childitem "./src")) {mv "./src/$obj" "./old/$projectname/$obj"}