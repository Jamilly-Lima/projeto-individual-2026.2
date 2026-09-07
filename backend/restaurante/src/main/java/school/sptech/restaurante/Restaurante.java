package school.sptech.restaurante;

public class Restaurante {

    private Integer id;
    private String nome;
    private String tipoCulinaria;
    private String endereco;
    private String faixaPreco;
    private Double avaliacao;
    private String telefone;

    public Restaurante() {
    }

    public Restaurante(Integer id, String nome, String tipoCulinaria, String endereco, String faixaPreco, Double avaliacao, String telefone) {
        this.id = id;
        this.nome = nome;
        this.tipoCulinaria = tipoCulinaria;
        this.endereco = endereco;
        this.faixaPreco = faixaPreco;
        this.avaliacao = avaliacao;
        this.telefone = telefone;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTipoCulinaria() {
        return tipoCulinaria;
    }

    public void setTipoCulinaria(String tipoCulinaria) {
        this.tipoCulinaria = tipoCulinaria;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getFaixaPreco() {
        return faixaPreco;
    }

    public void setFaixaPreco(String faixaPreco) {
        this.faixaPreco = faixaPreco;
    }

    public Double getAvaliacao() {
        return avaliacao;
    }

    public void setAvaliacao(Double avaliacao) {
        this.avaliacao = avaliacao;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
}
