    (function(win,doc){
        var s = doc.createElement("script"), h = doc.getElementsByTagName("head")[0];
        if (!win.alimamatk_show) {
            s.charset = "gbk";
            s.async = true;
            s.src = "https://alimama.alicdn.com/tkapi.js";
            h.insertBefore(s, h.firstChild);
        };
        var o = {
            pid: "mm_33484458_15006700_11367150213",/*�ƹ㵥ԪID���������ֲ�ͬ���ƹ�����*/
            appkey: "27692627",/*ͨ��TOPƽ̨�����appkey�����ú������ɽ������appkey*/
            unid: "",/*�Զ���ͳ���ֶ�*/
            type: "click" /* click �������ڱ�־ ��ʹ��click������裩*/
        };
        win.alimamatk_onload = win.alimamatk_onload || [];
        win.alimamatk_onload.push(o);
    })(window,document);

