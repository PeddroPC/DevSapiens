package com.back.DevSapiens.Controller;

import com.back.DevSapiens.Model.CursoModel;
import com.back.DevSapiens.Service.CursosServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cursos")
@CrossOrigin(origins = "http://localhost:5173")
public class CursosController {

    @Autowired
    private CursosServices services;
    @PostMapping
    public ResponseEntity<?> create(@RequestBody CursoModel request){
        return services.create (request);
    }
    @PutMapping("/list")
    public List<CursoModel> list(){
        return services.list ();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete (@PathVariable Long id){
        return services.delete (id);
    }

}
