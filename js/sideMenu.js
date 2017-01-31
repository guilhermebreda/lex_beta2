
//Se o DOM estiver pronto 
$(document).ready(function (){

	//Adiciona evento de click ao botão do side menu
	$('.botaoMenuLateral').click(function(){
		//Caso for clicado adiciona efeito de slide ao side menu usando toggle (adicionar/remover)
		$('.sidebar').slideToggle('slow');
	});


});