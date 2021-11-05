var flavor = "chocolate"; // vanilla or chocolate
var vessel = "bowl"; // cone or bowl
var toppings = "sprinkles";  // sprinkles or peanuts

/* if conditions are true, print I'd like two scoops 
of __________ ice cream in a __________ with __________.*/


if ((flavor === 'vanilla' || flavor === 'chocolate') && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}

