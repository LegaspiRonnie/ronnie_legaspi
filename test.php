<?php
// function isPalindrome($x) {
//     $x = (string) $x;
//     $left = 0;
//     $right = strlen($x) - 1;

//     while ($left < $right) {
//         if ($x[$left] !== $x[$right]) {
//             return false;
//         }
//         $left++;
//         $right--;
//     }

//     return true;
// }

// var_dump(isPalindrome('121'));
// var_dump(isPalindrome('123'));

    function romanToInt(string $s) {
        
        $roman = [
            "I" => 1,
            "V" => 5,
            "X" => 10,
            "L" => 50,
            "C" => 100,
            "D" => 500,
            "M" => 1000
        ];
    }