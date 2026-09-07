package school.sptech.restaurante;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@RestController
@RequestMapping("/restaurante")
public class RestauranteController {

    private final JdbcTemplate jdbcTemplate;

    public RestauranteController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostMapping
    public ResponseEntity<Restaurante> cadastrarRestaurante(@RequestBody Restaurante novoRestaurante) {

        if (novoRestaurante.getNome() == null || novoRestaurante.getNome().isBlank() ||
                novoRestaurante.getTipoCulinaria() == null || novoRestaurante.getTipoCulinaria().isBlank() ||
                novoRestaurante.getEndereco() == null || novoRestaurante.getEndereco().isBlank() ||
                novoRestaurante.getFaixaPreco() == null || novoRestaurante.getFaixaPreco().isBlank() ||
                novoRestaurante.getAvaliacao() < 0 ||novoRestaurante.getAvaliacao() > 5.0 ||
                novoRestaurante.getTelefone() == null ||  novoRestaurante.getTelefone().isBlank()) {
            return ResponseEntity.status(400).build();
        }

        String sqlVerificar = "SELECT COUNT(*) FROM restaurante WHERE LOWER(nome) = LOWER(?) AND LOWER(endereco) = LOWER(?) AND telefone = ?";

        Integer quantidade = jdbcTemplate.queryForObject(
                sqlVerificar,
                Integer.class,
                novoRestaurante.getNome(),
                novoRestaurante.getEndereco(),
                novoRestaurante.getTelefone()
        );

        if (quantidade != null && quantidade > 0) {
            return ResponseEntity.status(409).build();
        }

        String sql = "INSERT INTO restaurante (nome, tipoCulinaria, endereco, faixaPreco, avaliacao, telefone) VALUES (?,?,?,?,?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            ps.setString(1, novoRestaurante.getNome());
            ps.setString(2, novoRestaurante.getTipoCulinaria());
            ps.setString(3, novoRestaurante.getEndereco());
            ps.setString(4, novoRestaurante.getFaixaPreco());
            ps.setDouble(5, novoRestaurante.getAvaliacao());
            ps.setString(6, novoRestaurante.getTelefone());
            return ps;
        }, keyHolder);

        Integer idInserido = keyHolder.getKeyAs(Integer.class);
        novoRestaurante.setId(idInserido);

        return ResponseEntity.status(201).body(novoRestaurante);
    }

    @GetMapping
    public ResponseEntity<List<Restaurante>> listarRestaurantes() {

        String sql = "SELECT * FROM restaurante";

        List<Restaurante> restaurantes =
                jdbcTemplate.query(sql,
                        new BeanPropertyRowMapper<>(Restaurante.class));

        return ResponseEntity.status(200).body(restaurantes);
    }

}
