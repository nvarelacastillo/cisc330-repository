<?php

$member = [
    'name' => 'Nicole',
    'age' => '21',
    'country' => 'United States',
];

foreach ($member as $name => $age) {
    echo $name . ': ' . $age . PHP_EOL;
}

echo '<br>';

function createMember(string $name, int $age, string $country = 'United States'): string {
    return "name: $name, age: $age, country: $country";
}

echo createMember('Sarah', 20, 'United States');

