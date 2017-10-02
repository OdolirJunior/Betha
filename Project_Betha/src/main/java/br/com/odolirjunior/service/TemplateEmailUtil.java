package br.com.odolirjunior.service;

public class TemplateEmailUtil {

    public static String getEmailTemplateOrdemFinalizada(String avaria, String image) {
        StringBuilder sb = new StringBuilder("");
        sb.append("<html>");
        sb.append("<body>");
        sb.append("<span>"+avaria+"</span>");
        sb.append("<img src=\""+image+"\"/>");
        sb.append("</body>");
        sb.append("</html>");
        return sb.toString();
    }


}
