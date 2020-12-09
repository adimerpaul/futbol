
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ARCE ORURO</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
    <!-- icheck bootstrap -->
    <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/adminlte.min.css">
</head>
<body class="hold-transition register-page">
<div class="register-box">
    <div class="card card-outline card-primary">
        <div class="card-header text-center">
            <a href="" class="h1"><b>ARCE</b>ORU</a>
        </div>
        <div class="card-body">
            <p class="login-box-msg">REGISTRATE COMO NUEVO SOCIO</p>


            <form method="POST" action="{{ route('register') }}">
                @csrf
                <div class="input-group mb-3">
                    <input type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}"  placeholder="Nombre Completo" style="text-transform: uppercase" required>
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-user"></span>
                        </div>
                    </div>
                    @error('name')
                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
                </div>
                <div class="input-group mb-3">
                    <input type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}"  placeholder="EMAIL">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                        </div>
                    </div>
                    @error('email')
                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control @error('club') is-invalid @enderror" value="{{ old('club') }}" name="club" placeholder="Club" style="text-transform: uppercase" required>
{{--                    <select name="club" id=""></select>--}}
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-futbol"></span>
                        </div>
                    </div>
                    @error('club')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>

                <div class="input-group mb-3">
                    <input type="password" id="pass1" name="password" class="form-control @error('password') is-invalid @enderror" placeholder="Password" required autocomplete="">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                        </div>
                    </div>
                    @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="input-group mb-3">
                    <input type="password" id="pass2" class="form-control" name="password_confirmation"  placeholder="Repetir password" required autocomplete="">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-7">
                        <div class="icheck-primary">
                            <input type="checkbox" id="agreeTerms" name="terms" value="agree">
                            <label for="agreeTerms">
                                Aceptar <a href="#">Terminos</a>
                            </label>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-5">
                        <button type="submit" id="btn" class="btn btn-primary btn-block">REGISTRAR</button>
                    </div>
                    <script>
                        pass1=document.getElementById('pass1');
                        pass2=document.getElementById('pass2');
                        btn=document.getElementById('btn');
                        pass1.addEventListener('keyup',verificar);
                        pass2.addEventListener('keyup',verificar);
                        function verificar(){
                            // console.log(pass1.value,pass2.value)
                            if (pass1.value==pass2.value){
                                btn.disabled=false;
                            }else{
                                btn.disabled=true;
                            }
                        }
                    </script>
                    <!-- /.col -->
                </div>
            </form>


            {{--            <div class="social-auth-links text-center">--}}
{{--                <a href="#" class="btn btn-block btn-primary">--}}
{{--                    <i class="fab fa-facebook mr-2"></i>--}}
{{--                    Sign up using Facebook--}}
{{--                </a>--}}
{{--                <a href="#" class="btn btn-block btn-danger">--}}
{{--                    <i class="fab fa-google-plus mr-2"></i>--}}
{{--                    Sign up using Google+--}}
{{--                </a>--}}
{{--            </div>--}}

            <a href="{{route('login')}}" class="text-center">Si ya tienes tuenta ingresa </a>
        </div>
        <!-- /.form-box -->
    </div><!-- /.card -->
</div>
<!-- /.register-box -->

<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.min.js"></script>
</body>
</html>
