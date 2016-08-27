$(document).ready(function() {
	$(document).on('keyup propertychange input paste', 'input', function() {
		calculate();
	});
});

function calculate() {
	var Level = parseInt($(".Level").val());
	var CondDamage = parseInt($(".Cond").val());
	var Stacks = parseInt($(".Stacks").val());
	var modBleed = parseInt($(".modBleed").val());
	var modBurn = parseInt($(".modBurn").val());
	var modConfuse = parseInt($(".modConfuse").val());
	var modTorment = parseInt($(".modTorment").val());
	var modPoison = parseInt($(".modPoison").val());
	var modFear = parseInt($(".modFear").val());
	var modChill = parseInt($(".modChill").val());
	
	
	if (isNaN(modBleed)) {modBleed = 0;}
	if (isNaN(modBurn)) {modBurn = 0;}
	if (isNaN(modConfuse)) {modConfuse = 0;}
	if (isNaN(modTorment)) {modTorment = 0;}
	if (isNaN(modPoison)) {modPoison = 0;}
	if (isNaN(modFear)) {modFear = 0;}
	if (isNaN(modChill)) {modChill = 0;}
	if (Level < 1 || isNaN(Level)) {Level = 1;}	
	if (CondDamage < 0 || isNaN(CondDamage)) {CondDamage = 0;}	
	if (Stacks < 1 || isNaN(Stacks)) {Stacks = 1;} 
	
	function bleeding(Level, CondDamage) {
		dmg = (1 + (modBleed / 100))*((0.06 * CondDamage) + (0.25 * Level) + 2);
		return dmg;
	}

	function burning(Level, CondDamage) {
		dmg = (1 + (modBurn / 100))*((0.155 * CondDamage) + (1.55 * Level) + 7.5);
		return dmg
	}

	function confusDot(Level, CondDamage) {
		dmg = (1 + (modConfuse / 100))*((0.035 * CondDamage) + (0.1 * Level) + 2);
		return dmg;
	}

	function confusTrig(Level, CondDamage) {
		dmg = (1 + (modConfuse / 100))*((0.0625 * CondDamage) + (0.575 * Level) + 3.5);
		return dmg;
	}

	function tormentStand(Level, CondDamage) {
		dmg = (1 + (modTorment / 100))*((0.045 * CondDamage) + (0.18 * Level) + 1.5);
		return dmg;
	}

	function tormentMove(Level, CondDamage) {
		dmg = (1 + (modTorment / 100))*2*((0.045 * CondDamage) + (0.18 * Level) + 1.5);
		return dmg;
	}

	function poison(Level, CondDamage) {
		dmg = (1 + (modPoison / 100))*((0.06 * CondDamage) + (0.375 * Level) + 3.5);
		return dmg;
	}

	function fear(CondDamage) {
		dmg = ((1 + (modConfuse / 100))*0.4 * CondDamage) + 444;
		return dmg;
	}

	function chilled(CondDamage) {
		dmg = (1 + (modChill / 100))*(0.3 * CondDamage) + 202;
		return dmg;
	}
	
	var bleeding = Math.round(bleeding(Level, CondDamage));
	var burning = Math.round(burning(Level, CondDamage));
	var confusionDot = Math.round(confusDot(Level, CondDamage));
	var confusionTrig = Math.round(confusTrig(Level, CondDamage));
	var tormentStand = Math.round(tormentStand(Level, CondDamage));
	var tormentMove = Math.round(tormentMove(Level, CondDamage));
	var poison = Math.round(poison(Level, CondDamage));
	var fear = Math.round(fear(CondDamage));
	var chilled = Math.round(chilled(CondDamage));
	
	$('tr.bleeding .stack').text(bleeding);
	$('tr.bleeding .tick').text(bleeding*Stacks);
	
	$('tr.burning .stack').text(burning);
	$('tr.burning .tick').text(burning*Stacks);
	
	$('tr.confusionDot .stack').text(confusionDot);
	$('tr.confusionDot .tick').text(confusionDot*Stacks);
	
	$('tr.confusionTrig .stack').text(confusionTrig);
	$('tr.confusionTrig .tick').text(confusionTrig*Stacks);
	
	$('tr.tormentStand .stack').text(tormentStand);
	$('tr.tormentStand .tick').text(tormentStand*Stacks);
	
	$('tr.tormentMove .stack').text(tormentMove);
	$('tr.tormentMove .tick').text(tormentMove*Stacks);
	
	$('tr.poison .stack').text(poison);
	$('tr.poison .tick').text(poison*Stacks);
	
	$('tr.fear .stack').text(fear);
	$('tr.fear .tick').text(fear);
	
	$('tr.chilled .stack').text(chilled);
	$('tr.chilled .tick').text(chilled);
}