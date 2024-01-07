package com.back.DevSapiens.Service;

import com.back.DevSapiens.Model.CursoModel;
import com.back.DevSapiens.Repository.CursosRepository;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class CursosServices {

    @Autowired
    private CursosRepository repository;

    public ResponseEntity<?> create (@RequestBody CursoModel request){
        CursoModel response = repository.save (request);
        return new ResponseEntity<> (response, HttpStatus.CREATED);
    }
    public List<CursoModel> list(){
        return repository.findAll ();
    }
    public ResponseEntity<?> delete(@PathVariable Long id){
        repository.deleteById (id);
        return new ResponseEntity<> (HttpStatus.OK);
    }
}
