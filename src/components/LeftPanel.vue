<template>
    <div container>
        <h4>Maintenance Windows</h4>
        <ul class='lista'>
            <li>TEST05-  07/11/2018</li>
            <li>TEST04 - 07/25/2018</li>
            <li>TEST02 - 09/26/2018</li>
            <li>TEST06 - 11/14/2018</li>
            <li>TEST01 - 12/05/2018</li>
            <li>TEST09 - 12/12/2018</li>
            <li>TEST03 - 01/31/2019</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'LeftPanel'
    
}
</script>

<style >
.lista {
	list-style: none;
	margin: 0;
	padding: 0;
}

li {
	background: white;
	height: 40px;
	line-height: 40px;
}

li:nth-child(2n){
	background: #f7f7f7;
}

li:hover span {
	width: 40px;
	opacity: 1.0;
}

</style>

