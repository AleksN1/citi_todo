<template>
    <body>
        <div class="wrapper">
            <div class="header">
                <div class="header_back">
                    <div class="header_container _container">
                        <div class="header_logo">
                            <a href="https://www.citigroup.com/citi/" class="header_logo-link">
                                <img src="../assets/BigLogo.svg" alt = "Biglogo" class="header_logo_pic"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class = "main-container _container">
                    <div class="rectangle_452">
                        <div class="thank_you" id="thank_you" >Thank you {{user}} !</div>
                        <ToDoBlock/>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>


<script>
    import ToDoBlock from '/src/components/ToDoBlock.vue'

    export default {
        name: 'ToDoPage',
        components: {
        ToDoBlock,
        },
        data () {
            return {
                user: localStorage.getItem("name"),
            }
        }
    }
</script>


<style scoped>
    body {
        background-color: #E5E5E5;
    }
    .wrapper {
        max-width: 1920px;
        min-height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;    
    }
    ._container {
        margin: 0px auto;
        max-width: 1190px;
        min-height: 100%;
        padding: 0px 20px;
        box-sizing: content-box;
    }

    /********************************************************************/

    .header_back {
        max-width: 1920px;
        min-height: 797px;
        top: 0px;
        left: 0px;
        
        background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);	
    }
    .header_logo {
        display: flex;
        justify-content: center;
    }
    .header_logo_pic {
        width: 186px;
        height: 119px; 
        margin-top: 65px;
    }
    .rectangle_452 {
        margin: -547px auto 0px auto;
        max-width: 1190px;
        min-height: 660px;
        border-radius: 25px;
        padding: 0px 0px 20px 0px;
        background: #FFFFFF;
    }
    .thank_you {
        display: flex;
        justify-content: center;

        padding-top: 32px;
                
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 156.69%;
    /* identical to box height, or 94px */

        align-items: center;
        text-align: center;

        color: #333333;
    }
</style>     

