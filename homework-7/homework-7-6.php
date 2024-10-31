<?php

class Social
{
    public string $name;
    public int $age;
    public static $gender = 'female';

    public function __construct(string $name, int $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function getName() {
        return $this->name;
    }

    public function getAge() {
        return $this->age;
    }

    public function getGender() {
        return self::$gender;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function setAge($age) {
        $this->age = $age;
    }

    public function setGender($gender) {
        self::$gender = $gender;
    }

    public static function getStaticGender() {
       return self::$gender;
    }
}