<html>
<style>
html{
    text-align: center;
    font-family: sans-serif, "Microsoft YaHei";
    overflow: hidden;
}
.head {
    font-size: 3.5vw;
}
.songinput {
    margin-top: 2vw;
    width: 90vw;
    height: 20vw;
    font-size: 3.5vw;
    border-radius: 2vw;
    border: 0.5vw solid #6a9bba;
    font-family: sans-serif, "Microsoft YaHei";
}
.confirm {
    margin-top: 2vw;
    width: 20vw;
    font-size: 3vw;
    background:#6a9bba;
    border-radius: 2vw;
    border: 0.5vw solid #6a9bba;
    color: #fff;
    font-family: sans-serif, "Microsoft YaHei";
}
</style>
    <body>
        <form name="form" method="post">
            <label class="head">請老師們寫下您們最想聽的歌，不限幾首哦！</label><br>
            <textarea type="text" name="text_box" class="songinput" placeholder="歌一，歌二，歌三，等等"></textarea><br>
            <input type="submit" id="search-submit" value="確定" class="confirm" onclick="yes()" style="margin-left: 48vw"></input>
            <button type="button" class="confirm" onclick="skip()">跳過</button>
        </form>
    </body>
</html>
<?php
    if(isset($_POST['text_box'])) { //only do file operations when appropriate
        $a = $_POST['text_box']  . PHP_EOL;
        $myFile = "t.txt";
        $fh = fopen($myFile, "a") or die("can't open file");
        fwrite($fh, $a);
        fclose($fh);
        echo "收到！";
    }
?>
<script type="text/javascript">
    function yes() {
        window.top.location.href = "/teachersday/homeroom.html"; 
    }

    function skip() {
        window.top.location.href = "/teachersday/homeroom.html"; 
    }
</script>