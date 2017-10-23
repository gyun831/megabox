<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>메가박스</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="${path.js}/megabox.js"></script>
<script src="${path.js}/seungwoo.js"></script>
<script src="${path.js}/jkh.js"></script>
<script src="${path.js}/jooyoul.js"></script>
<link rel="stylesheet" href="${path.css}/megabox.css" />
<link href="http://www.megabox.co.kr/css/megabox.css" rel="stylesheet">
<link href="http://www.megabox.co.kr/css/normalize.css" rel="stylesheet">
<link href="http://www.megabox.co.kr/css/theme.css" rel="stylesheet">
<link href="http://www.megabox.co.kr/css/theme2.css" rel="stylesheet">
<link href="http://www.megabox.co.kr/css/forms.css" rel="stylesheet">
<link href="http://www.megabox.co.kr/css/etc.css" rel="stylesheet">
<link href="http://www.megabox.co.kr/css/font-awesome.css" rel="stylesheet">

</head>
<body>
<header class="TopBn_ok">
</header>
<div id="wrapper">
<div id="mega_main"></div>
<div id="footer-wrap"></div>
</div> 
<script>
megabox.common.init('${path.ctx}');
reservation.index.init();
</script>
</body>
</html>