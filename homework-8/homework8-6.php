<?php

namespace cisc330_repository\homework_8;

use Exception;

function myErrorHandler() {
    echo 'my error handler called';
    exit();
}

try {
    if (true) {
        throw new Exception('Error!');
    }
} catch (Exception $e) {
    echo 'Caught error';
}

set_error_handler(__NAMESPACE__ . "\\myErrorHandler");
trigger_error(' ');
