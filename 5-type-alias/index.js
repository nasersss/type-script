/**
 * Data Types
 * - Type alias
 */
var all;
all = 20;
all = "name";
function getActions(btn) {
    console.log("\n    Action for button up is : ".concat(btn.up, ",\n    Action for button left is : ").concat(btn.left, ",\n    Action for button right is : ").concat(btn.right, ",\n    Action for button down is : ").concat(btn.down, ",\n    "));
}
getActions({ up: "Jump", left: "Go left", right: "Go right", down: "Go down" });
