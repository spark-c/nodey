param (
    $projectname
)

foreach ($obj in (get-childitem "./src")) {mv "./src/$obj" "./old/$projectname/$obj"}