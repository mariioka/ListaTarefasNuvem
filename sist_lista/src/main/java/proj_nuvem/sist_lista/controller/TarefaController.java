package proj_nuvem.sist_lista.controller;

import proj_nuvem.sist_lista.model.*;
import java.util.*;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {
    private List<Tarefa> tarefas = new ArrayList<>();
    private int numId = 1;

    @GetMapping
    public List<Tarefa> getTarefas(){
        return tarefas;
    }

    @PostMapping
    public Tarefa addTarefa(@RequestBody Tarefa tarefa){
        tarefa.setId(numId++);
        tarefas.add(tarefa);
        return tarefa;
    }

    @DeleteMapping("/{id}")
    public void excluiTarefa(@PathVariable int id){
        tarefas.removeIf(tarefa -> tarefa.getId()==id);
    }
}
