#####################################################################
'reinit'
'sdfopen junh1.nc'
'set display color white'
'c'
*'set t 31'
'set grads off'
'set grid off'
'set mpdset brmap_hires'
*'define jan = ave(rhum,time=01jan1961,time=01jan2024,1)'
*'define jad = (jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov +dec)/12' 
'set gxout shaded'
*'set parea 1 5 5 8'
*'cnarn.gs -gxout shaded -levs 2 4 6 8 10 12'

'set clevs 2 4 6 8 10 12'

'd mag(dezu,dezv)'
'cbarn 1 1 9.2 4.5'
* Plota os vetores de vento 
'set gxout vector'
'd dezu;skip(dezv,10)'

* Adiciona título e salva a imagem
'draw title Vetores de Vento a 10m media Climatologia junho 61-24'
'printim 6124_vetores_vento_junho_10m.png png'

#####################################################################
#####################################################################
#####################################################################
'reinit'
'sdfopen junh1.nc'
'set display color white'
'c'
*'set t 31'
'set grads off'
'set grid off'
'set mpdset brmap_hires'
*'define jan = ave(rhum,time=01jan1961,time=01jan2024,1)'
*'define jad = (jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov +dec)/12' 
'set gxout shaded'
*'set parea 1 5 5 8'
*'cnarn.gs -gxout shaded -levs 2 4 6 8 10 12'

'set clevs 2 4 6 8 10 12'

'd mag(cemu,cemv)'
'cbarn 1 1 9.2 4.5'
* Plota os vetores de vento 
'set gxout vector'
'd cemu;skip(cemv,10)'

* Adiciona título e salva a imagem
'draw title Vetores de Vento a 100m media Climatologia junho 61-24'
'printim 6124_vetores_vento_junho_100m.png png'



